async function asyncGetTechnologies() {
    const filePath = 'technologies.json'
    const response = await fetch(import.meta.env.VITE_GITHUB_PORTFOLIO_RESOURCES + filePath);

    return await response.json();
}

export default asyncGetTechnologies