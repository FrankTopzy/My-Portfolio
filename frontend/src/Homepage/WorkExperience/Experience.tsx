import Title from "../../components/Title"
import VerticalTimelin from "../../components/VerticalTimelin"


function Experience() {
  return (
    <div className="bg-black text-white flex flex-col items-center" id="experience">
      <section className="pt-[100px] lg:px-[200px] px-10 pb-10 max-w-[1300px]">
        <Title title="Work Experience" align="left"/>
        <VerticalTimelin/>
      </section>
    </div>
  )
}

export default Experience
