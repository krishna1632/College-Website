const Courses = () => {

  const humanities = [
    {
      name: 'HUMANITIES',
      image: 'images/humanities1.jpg',
      hoverImage: 'images/humanities.jpg',
      color: '#EEF2FF',
    }
  ]

  const commerce = [
    {
      name: 'COMMERCE',
      image: 'images/commerce.jpg',
      color: '#EEF2FF',
    }
  ]

  const science = [
    {
      name: 'SCIENCE',
      image: 'images/sciences.jpg',
      color: '#EEF2FF',
    }
  ]

  const vocation = [
    {
      name: 'VOCATION',
      image: 'images/vocation.jpg',
      color: '#EEF2FF',
    }
  ]

  return (
    <>
      <div className="flex justify-around w-screen mt-20 h-[202px] px-5">
        {
          humanities.map(
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
        {
          commerce.map(
            (item, index) => {
              return (
                <div key={index} className="flex justify-around h-[202px] w-[250px]">
                  <img src={item.image} alt="" />
                </div>
              )
            }
          )
        }
        {
          science.map(
            (item, index) => {
              return (

                <div key={index} className="flex justify-around h-[202px] w-[250px]">
                  <img src={item.image} alt="" />
                </div>

              )
            }
          )
        }
        {
          vocation.map(
            (item, index) => {
              return (

                <div key={index} className="flex justify-around h-[202px] w-[250px]">
                  <img src={item.image} alt="" />
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