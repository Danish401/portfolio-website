import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

async function extractAllDatas(currentSection) {
  try {
    const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store",
    });

    // Check if the response is not OK
    if (!res.ok) {
      const errorText = await res.text(); // get the response text
      console.error(`Error fetching ${currentSection}:`, errorText); // log the error text
      throw new Error(`Failed to fetch ${currentSection}: ${res.status}`);
    }

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
