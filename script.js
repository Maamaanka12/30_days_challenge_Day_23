// Lucide icons (logo + services only, monochrome blue via .svc-icon)
if (window.lucide) lucide.createIcons();

// Mobile menu
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});
document.querySelectorAll('#mobileMenu a').forEach((a) =>
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'))
);

// Plan buttons fill the booking select
document.querySelectorAll('.plan-btn').forEach((b) =>
  b.addEventListener('click', () => {
    const plan = b.dataset.plan;
    const sel = document.getElementById('plan');
    [...sel.options].forEach((o) => {
      if (plan.split(' ')[0] === o.text.split(' ')[0]) sel.value = o.text;
    });
    if (plan.startsWith('Unlimited')) sel.value = 'Unlimited Monthly — $59/mo';
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  })
);

// Vehicle selector
let vehicle = 'Sedan';
document.querySelectorAll('.v-btn').forEach((b) =>
  b.addEventListener('click', () => {
    document.querySelectorAll('.v-btn').forEach((x) => {
      x.classList.remove('bg-primary', 'text-primary-foreground');
      x.classList.add('border');
    });
    b.classList.add('bg-primary', 'text-primary-foreground');
    b.classList.remove('border');
    vehicle = b.dataset.v;
  })
);

// Booking
document.getElementById('bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const plan = document.getElementById('plan').value;
  const date = document.getElementById('date').value;
  const msg = document.getElementById('formMsg');
  msg.classList.remove('hidden');
  msg.textContent =
    'Booked: ' + plan + ' for a ' + vehicle + ' under ' + name + ', ' + date.replace('T', ' at ') + '. SMS confirmation follows.';
});

// Legal dialogs
const tos = document.getElementById('tosDlg');
const priv = document.getElementById('privDlg');
document.getElementById('tosBtn').addEventListener('click', () => tos.showModal());
document.getElementById('privBtn').addEventListener('click', () => priv.showModal());
document.querySelectorAll('[data-close]').forEach((b) =>
  b.addEventListener('click', (e) => e.target.closest('dialog').close())
);
