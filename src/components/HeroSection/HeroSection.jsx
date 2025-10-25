import "./HeroSection.css"

export default function HeroSection({ page, className,}){
return (
  <>
    <div className={className}>
  <div  className="banner-content">
    <h1> {page} ShopTopOne</h1>
    <p>Elegance on your wrist – Discover our collection</p>
   
  </div>
</div>
  </>
)

}