
function Todo({id}) {
    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
    if (todo.state === "loading") {
       return <div>loading</div>
    }