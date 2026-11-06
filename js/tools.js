/* ============================================================
   MediWell — Health calculators
   BMI · Daily calories · Water intake · Heart-rate zones
   ============================================================ */

(function () {
  'use strict';

  const $ = function (id) { return document.getElementById(id); };

  function num(el) {
    const v = parseFloat(el && el.value);
    return Number.isFinite(v) ? v : NaN;
  }

  function showResult(box, html) {
    box.innerHTML = html;
    box.classList.add('show');
  }

  function safe(n, digits) {
    return Number(n.toFixed(digits == null ? 1 : digits));
  }

  /* ---------- 1. BMI ---------- */
  const bmiForm = $('bmi-form');
  if (bmiForm) {
    const unitInputs = bmiForm.querySelectorAll('input[name="bmi-unit"]');
    const heightLabel = $('bmi-height-label');
    const weightLabel = $('bmi-weight-label');
    const heightHint = $('bmi-height-hint');

    function syncUnits() {
      const unit = bmiForm.querySelector('input[name="bmi-unit"]:checked').value;
      if (unit === 'imperial') {
        heightLabel.textContent = 'Height (inches)';
        weightLabel.textContent = 'Weight (lb)';
        heightHint.textContent = 'Example: 5 ft 7 in = 67 inches';
      } else {
        heightLabel.textContent = 'Height (cm)';
        weightLabel.textContent = 'Weight (kg)';
        heightHint.textContent = 'Example: 170 cm';
      }
    }
    unitInputs.forEach(function (r) { r.addEventListener('change', syncUnits); });
    syncUnits();

    bmiForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const unit = bmiForm.querySelector('input[name="bmi-unit"]:checked').value;
      let h = num($('bmi-height'));
      let w = num($('bmi-weight'));
      const box = $('bmi-result');

      if (!(h > 0) || !(w > 0)) {
        showResult(box, '<p class="result-note" style="color:var(--danger);margin:0">Please enter a valid height and weight.</p>');
        return;
      }

      if (unit === 'imperial') {
        h = h * 2.54;
        w = w * 0.45359237;
      }

      const m = h / 100;
      const bmi = w / (m * m);
      let label, cls, note, pin;
      if (bmi < 18.5) {
        label = 'Underweight'; cls = 'badge-amber';
        note = 'A BMI below 18.5 may indicate low body weight. Consider speaking with a healthcare professional about nutrition.';
      } else if (bmi < 25) {
        label = 'Healthy weight'; cls = 'badge-green';
        note = 'A BMI in this range is generally associated with the lowest health risk for most adults.';
      } else if (bmi < 30) {
        label = 'Overweight'; cls = 'badge-amber';
        note = 'A BMI of 25–29.9 is classified as overweight. Small, sustainable changes in nutrition and activity can help.';
      } else {
        label = 'Obese'; cls = 'badge-red';
        note = 'A BMI of 30 or above is classified as obesity. It is worth discussing health risks and options with a clinician.';
      }
      pin = Math.max(2, Math.min(98, ((bmi - 14) / (40 - 14)) * 100));

      showResult(box,
        '<div class="result-label">Your Body Mass Index</div>' +
        '<div class="result-value">' + safe(bmi) + ' <small>kg/m²</small></div>' +
        '<span class="badge ' + cls + '" style="margin-top:8px">' + label + '</span>' +
        '<div class="meter"><span class="meter-pin" style="left:' + pin + '%"></span></div>' +
        '<div class="meter-labels"><span>Under 18.5</span><span>18.5–25</span><span>25–30</span><span>30+</span></div>' +
        '<p class="result-note">' + note + '</p>' +
        '<p class="result-note" style="opacity:.85">BMI is a screening tool, not a diagnosis. It does not distinguish muscle from fat and may not suit athletes, pregnant people, children or older adults.</p>'
      );
    });
  }

  /* ---------- 2. Daily calories (Mifflin-St Jeor) ---------- */
  const calForm = $('calorie-form');
  if (calForm) {
    calForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const sex = $('cal-sex').value;
      const age = num($('cal-age'));
      const h = num($('cal-height'));
      const w = num($('cal-weight'));
      const factor = parseFloat($('cal-activity').value);
      const box = $('calorie-result');

      if (!(age > 14 && age < 110) || !(h > 80 && h < 250) || !(w > 25 && w < 350)) {
        showResult(box, '<p class="result-note" style="color:var(--danger);margin:0">Please enter valid values: age 15–109, height 80–250 cm, weight 25–350 kg.</p>');
        return;
      }

      const bmr = sex === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;
      const tdee = bmr * factor;

      showResult(box,
        '<div class="result-label">Estimated daily energy needs</div>' +
        '<div class="result-value">' + Math.round(tdee).toLocaleString() + ' <small>kcal/day</small></div>' +
        '<div class="result-row"><span>Resting energy (BMR)</span><b>' + Math.round(bmr).toLocaleString() + ' kcal</b></div>' +
        '<div class="result-row"><span>To lose ~0.5 kg/week</span><b>' + Math.round(tdee - 500).toLocaleString() + ' kcal</b></div>' +
        '<div class="result-row"><span>To maintain weight</span><b>' + Math.round(tdee).toLocaleString() + ' kcal</b></div>' +
        '<div class="result-row"><span>To gain ~0.5 kg/week</span><b>' + Math.round(tdee + 500).toLocaleString() + ' kcal</b></div>' +
        '<p class="result-note">Based on the Mifflin-St Jeor equation and your activity level. This is an estimate — individual needs vary. Do not drop below about 1,200 kcal/day (women) or 1,500 kcal/day (men) without medical supervision.</p>'
      );
    });
  }

  /* ---------- 3. Water intake ---------- */
  const waterForm = $('water-form');
  if (waterForm) {
    waterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const w = num($('water-weight'));
      const minutes = num($('water-exercise')) || 0;
      const climate = parseFloat($('water-climate').value);
      const box = $('water-result');

      if (!(w > 25 && w < 350)) {
        showResult(box, '<p class="result-note" style="color:var(--danger);margin:0">Please enter a valid body weight (25–350 kg).</p>');
        return;
      }

      const base = w * 0.033;
      const exercise = (minutes / 30) * 0.35;
      const total = (base + exercise) * climate;
      const glasses = total / 0.25;

      showResult(box,
        '<div class="result-label">Estimated daily fluid target</div>' +
        '<div class="result-value">' + safe(total) + ' <small>litres/day</small></div>' +
        '<div class="result-row"><span>Approximately</span><b>' + Math.round(glasses) + ' glasses (250 ml)</b></div>' +
        '<div class="result-row"><span>Base need</span><b>' + safe(base) + ' L</b></div>' +
        '<div class="result-row"><span>Exercise bonus</span><b>+ ' + safe(exercise) + ' L</b></div>' +
        '<p class="result-note">Includes water from drinks and food. Needs increase in hot weather, during illness and when pregnant or breastfeeding. People with kidney, liver or heart conditions should follow medical advice on fluid limits.</p>'
      );
    });
  }

  /* ---------- 4. Heart-rate zones ---------- */
  const hrForm = $('hr-form');
  if (hrForm) {
    hrForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const age = num($('hr-age'));
      const resting = num($('hr-resting'));
      const box = $('hr-result');

      if (!(age > 10 && age < 110)) {
        showResult(box, '<p class="result-note" style="color:var(--danger);margin:0">Please enter a valid age (11–109).</p>');
        return;
      }

      const maxHr = 220 - age;
      let zones;
      if (resting > 30 && resting < 120) {
        const reserve = maxHr - resting;
        zones = [
          ['Zone 1 · Recovery', 0.50, 0.60],
          ['Zone 2 · Endurance', 0.60, 0.70],
          ['Zone 3 · Aerobic', 0.70, 0.80],
          ['Zone 4 · Threshold', 0.80, 0.90],
          ['Zone 5 · Maximum', 0.90, 1.00]
        ].map(function (z) {
          return [z[0], Math.round(resting + reserve * z[1]), Math.round(resting + reserve * z[2])];
        });
      } else {
        zones = [
          ['Zone 1 · Recovery', 0.50, 0.60],
          ['Zone 2 · Endurance', 0.60, 0.70],
          ['Zone 3 · Aerobic', 0.70, 0.80],
          ['Zone 4 · Threshold', 0.80, 0.90],
          ['Zone 5 · Maximum', 0.90, 1.00]
        ].map(function (z) {
          return [z[0], Math.round(maxHr * z[1]), Math.round(maxHr * z[2])];
        });
      }

      showResult(box,
        '<div class="result-label">Estimated maximum heart rate</div>' +
        '<div class="result-value">' + maxHr + ' <small>bpm</small></div>' +
        zones.map(function (z) {
          return '<div class="result-row"><span>' + z[0] + '</span><b>' + z[1] + '–' + z[2] + ' bpm</b></div>';
        }).join('') +
        '<p class="result-note">' + (resting > 30 && resting < 120 ? 'Zones calculated using the Karvonen method with your resting heart rate.' : 'Add your resting heart rate for more personalised zones (Karvonen method).') + ' 220 − age is an estimate; actual maximum heart rate varies.</p>' +
        '<p class="result-note">If you take medication that affects heart rate (such as beta-blockers) or have a heart condition, ask your doctor before using heart-rate targets.</p>'
      );
    });
  }
})();
