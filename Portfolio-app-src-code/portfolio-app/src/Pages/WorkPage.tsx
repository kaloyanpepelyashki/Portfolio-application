import ProjectItemComponent from "../Components/UI Components/Global Components/ProjectItemComponent";
import fetchProjects from "../Components/BLOC/GetProjectsBLOC";
import { useEffect, useState } from "react";
import Project from "../Components/Models/Project";
import WorkPageHeader from "../Components/UI Components/Small commponents/WorkPageHeader";
import { Divider } from "@mui/material";
import FetchLoader from "../Components/UI Components/Small commponents/FetchLoader";

export default function WorkPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [projects, setProjects] = useState<Array<Project>>([]);
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);

  const [privacyFilter, setPrivacyFilter] = useState<number>(1);
  const [filterLanguages, setFilterLanguages] = useState<Array<string>>([]);

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Array<Project>>([]);

  async function getProjects() {
    const productResult = await fetchProjects();

    if (productResult.isSuccess) {
      return setProjects(productResult.payload);
    } else {
      console.error("Error getting projects: ", productResult.message);
    }
  }

  useEffect(() => {
    try {
      getProjects();
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (filterLanguages.length > 0) {
      filtered = filtered.filter((project) =>
        filterLanguages.every((lng) => project.stack.includes(lng))
      );
    }

    if (privacyFilter === 2) {
      filtered = filtered.filter((project) => !project.isPrivate);
    } else if (privacyFilter === 3) {
      filtered = filtered.filter((project) => project.isPrivate);
    }

    setFilteredProjects(filtered);
  }, [filterLanguages, privacyFilter]);

  useEffect(() => {
    setTimeout(() => {
      setIsSearch(false);
    }, 11000);
  }, [isSearch]);

  const searchFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(true);

    const userSearchInput = e.target.value.toLowerCase();

    const result = projects.filter((project) =>
      project.title.toLowerCase().includes(userSearchInput)
    );

    setSearchResult(result);
  };

  return (
    <>
      <div className="work-page-main-wrapper page-main-wrapper">
        {isLoading ? (
          <div className="fetch-loader-holder">
            <FetchLoader />
          </div>
        ) : (
          <div className="work-page-inner">
            <WorkPageHeader
              filterLanguages={filterLanguages}
              setFilterLanguages={setFilterLanguages}
              privacyFilter={privacyFilter}
              setPrivacyFilter={setPrivacyFilter}
              searchFunction={searchFunction}
            />

            <div className="project-section-wrapper">
              <div className="projects-list-holder">
                {isSearch && searchResult.length > 0 ? (
                  <div>
                    <Divider
                      color="white"
                      role="presentation"
                      textAlign="left"
                    ></Divider>
                    {searchResult.map((project) => {
                      return (
                        <>
                          <ProjectItemComponent
                            key={project.id}
                            project={project}
                          />
                        </>
                      );
                    })}
                    <Divider
                      className="search-result-divider search-result-bottom-divider"
                      color="white"
                      role="presentation"
                    />
                  </div>
                ) : isSearch && searchResult.length < 0 ? (
                  <>
                    "No Search fits the criteria" <Divider />
                  </>
                ) : null}
                {projects.length > 0 && filteredProjects.length == 0
                  ? projects.map((project) => {
                      return (
                        <ProjectItemComponent
                          key={project.id}
                          project={project}
                        />
                      );
                    })
                  : filteredProjects.length > 0
                  ? filteredProjects.map((project) => {
                      return (
                        <ProjectItemComponent
                          key={project.id}
                          project={project}
                        />
                      );
                    })
                  : "No projects found"}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
