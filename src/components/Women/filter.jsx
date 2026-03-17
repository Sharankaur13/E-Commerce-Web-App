<div className="grid grid-cols-3 gap-4 mt-10">
{
relatedProducts.map(item => (
  <div key={item.id} className="border p-3">
    <img src={Array.isArray(item.img) ? item.img[0] : item.img} className="h-40"/>
    <p>{item.desc}</p>
  </div>
))
}
</div>