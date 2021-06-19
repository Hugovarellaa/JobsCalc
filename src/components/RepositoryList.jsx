import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "unform4",
    description: "Form in React",
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="Repository-list">
            <h1>Lista de repositorios </h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}