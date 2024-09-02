const Courses = () => {

  const humanities = [
    {
      name: 'HUMANITIES',
      image: 'images/humanities1.png',
      hoverImage: 'images/humanities.jpg',
      color: '#EEF2FF',
    }
  ]

  const commerce = [
    {
      name: 'COMMERCE',
      image: 'images/Commerce_logo.png', 
      hoverImage: 'images/commerce.jpg',
      color: '#EEF2FF',
    }
  ]

  const science = [
    {
      name: 'SCIENCE',
      image: 'images/sciences1.png', 
      hoverImage: 'images/sciences.jpg',
      color: '#EEF2FF',
    }
  ]

  const vocation = [
    {
      name: 'VOCATION',
      image: 'images/vocation_logo.png', 
      hoverImage: 'images/vocation.jpg',
      color: '#EEF2FF',
    }
  ]

  return (
    <>
      <div className="flex justify-around items-center w-screen mt-20 h-[270px] bg-[#f6f9f6]">
        {
          humanities.map(
            (item, index) => {
              return (
                <div key={index} className="relative h-[250px] w-[250px] perspective-1000">
                  <div className="flip-card">
                    <img src={item.image} alt={item.name} className="front" />
                    <img src={item.hoverImage} alt={item.name} className="back" />
                  </div>
                </div>
              )
            }
          )
        }
        {
          commerce.map(
            (item, index) => {
              return (
                <div key={index} className="relative h-[250px] w-[250px] perspective-1000">
                  <div className="flip-card">
                    <img src={item.image} alt={item.name} className="front" />
                    <img src={item.hoverImage} alt={item.name} className="back" />
                  </div>
                </div>
              )
            }
          )
        }
        {
          science.map(
            (item, index) => {
              return (

                <div key={index} className="relative h-[250px] w-[250px] perspective-1000">
                  <div className="flip-card">
                    <img src={item.image} alt={item.name} className="front" />
                    <img src={item.hoverImage} alt={item.name} className="back" />
                  </div>
                </div>

              )
            }
          )
        }
        {
          vocation.map(
            (item, index) => {
              return (

                <div key={index} className="relative h-[202px] w-[250px] perspective-1000">
                  <div className="flip-card">
                    <img src={item.image} alt={item.name} className="front" />
                    <img src={item.hoverImage} alt={item.name} className="back" />
                  </div>
                </div>

              )
            }
          )
        }
      </div>
    </>
  )
}

export default Courses;