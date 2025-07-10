
// تحميل بيانات المستشفيات وعرضها
fetch('hospitals.json').then(r=>r.json()).then(data=>{
  const list = document.getElementById('hospitalList');
  if(!list) return;
  data.forEach(h=>{
    const card = `
      <article class="card ${h.type}">
        <h3>${h.name}</h3>
        <p>المحافظة: ${h.governorate}</p>
        <p>الأقسام: ${h.departments.slice(0,3).join('، ')}…</p>
        <a href="hospital.html?id=${h.id}">عرض التفاصيل</a>
      </article>`;
    list.insertAdjacentHTML('beforeend',card);
  });
  // فلترة حسب المحافظة
  document.getElementById('govFilter').onchange = e=>{
    const g = e.target.value;
    document.querySelectorAll('.card').forEach(c=>{
      c.style.display = (g===''||c.innerText.includes(g))?'block':'none';
    });
  };
});
