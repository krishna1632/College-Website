const ContentBox = () => {
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
      <div className="flex w-screen justify-center">
        <div className="flex w-[1170px] bg-green-500">
          {
            contentData.map(
              (item, index) => {
                return (
                  <div key={index} className="flex flex-col justify-start items-center pt-[30px] h-[250px] w-[292.5px] font-bold cursor-pointer text-[#000]" style={{ backgroundColor: item.color }}>
                    <span>{item.name}</span>
                    <img src={item.image} alt="" className=" h-[150px] w-auto" style={{ maxHeight: `150px` }} />
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    </>
  )
}

export default ContentBox;

