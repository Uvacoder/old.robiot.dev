import { useContext } from "react";
import { FaGithub } from "react-icons/fa";

import { Container, SectionLine } from "../../../lib/style";
import { themeCtx, themes } from "../../../pages/_app";
import { Section, SectionTitle } from "../Experience/Experience.style";
import { TheProjects } from "./projects";
import {
    ButtonsWrapper,
    DownloadButton,
    GithubButton,
    LeftWrapper,
    ProjectDescription,
    ProjectDiv,
    ProjectImage,
    ProjectsWrapper,
    ProjectTitle,
} from "./Projects.style";

type ProjectType = {
    title: string;
    description: string;
    download: string;
    github: string;
    image: string;
};

const Project = ({
    theme,
    title,
    description,
    download,
    github,
    image,
}: {
    theme: themes;
    title: string;
    description: string;
    download: string;
    github: string;
    image: string;
}) => {
    return (
        <ProjectDiv
            style={{ boxShadow: theme == "light" ? undefined : "none" }} // Hack, but works
        >
            <LeftWrapper>
                <div>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                </div>
                <ButtonsWrapper>
                    <DownloadButton href={download} target="_blank">
                        Download
                    </DownloadButton>
                    <GithubButton href={github} target="_blank">
                        <FaGithub />
                    </GithubButton>
                </ButtonsWrapper>
            </LeftWrapper>
            <ProjectImage src={`/img/projects/${image}`} />
        </ProjectDiv>
    );
};

export const Projects = () => {
    const [theme, _setTheme] = useContext(themeCtx);

    return (
        <Section id="projects" style={{ scrollMarginTop: "100px" }}>
            <Container>
                <SectionLine />
                <SectionTitle>Projects</SectionTitle>
                <ProjectsWrapper>
                    {TheProjects.map((item: ProjectType, index: any) => (
                        <div data-aos="fade-up">
                            <Project
                                key={index}
                                theme={theme}
                                title={item.title}
                                description={item.description}
                                download={item.download}
                                github={item.github}
                                image={item.image}
                            />
                        </div>
                    ))}
                </ProjectsWrapper>
            </Container>
        </Section>
    );
};
