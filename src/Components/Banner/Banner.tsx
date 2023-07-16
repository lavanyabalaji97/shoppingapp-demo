import '../Banner/Banner.css'

function Banner() {
  return (
    <div className="container-fluid black-background ">
     <div className="row d-lg-flex  d-md-inline-block  justify-content-between">
      <div className="col-lg-4 section_one">
         <h1 className='explore_heading'>Explore a Wide  Selection of craft forms</h1> 
         <a href="" className='explore_link'>Learn More</a>
      </div>
      <div className="col-lg-4 section_two">
         <h1 className='explore_number'>100</h1>
         <span className='explore_span'>CRAFT FORMS</span>
      </div>
     </div>
    </div>
  )
}

export default Banner;