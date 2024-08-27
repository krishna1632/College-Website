const Courses = () => {
  return (
    const contentData = [
      {
        name: 'LIBRARY',
        image: 'images/Library_logo.png',
        color: '#6674FC',
      },
      {
        name: 'CENTRE AND CELLS',
        image: 'images/center.png',
        color: '#F1E3E3',
      },
      {
        name: 'SOCIETIES',
        image: 'images/Societies_logo.png',
        color: '#6674FC',
      },
      {
        name: 'TLC',
        image: 'images/tlc_logo.png',
        color: '#F1E3E3',
      },
    ]
  return (
    <>
      <div className="flex mt-[400px] mx-[300px]">
        {
          contentData.map(
            (item, index) => {
              return (
                <div key={index} className="flex flex-col justify-start items-center pt-[30px] h-[202px] w-[226px] font-bold cursor-pointer" style={{ backgroundColor: item.color }}>
                  <span>{item.name}</span>
                  <img src={item.image} alt="" className="mt-2 h-[139px] w-auto" />
                </div>
              )
            }
          )
        }


      </div>
    </>
  )
}
  )
}

export default Courses;