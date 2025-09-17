async function asyncGetProjects() {
    const filePath = 'projects.json'
    const response = await fetch(import.meta.env.VITE_GITHUB_PORTFOLIO_RESOURCES + filePath);

    return await response.json();
}

export default asyncGetProjects