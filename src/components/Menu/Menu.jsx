import itensMenu from "./menu_list";

function Menu() {
  return (
    <div className="flex">
      <div className="menu">
        <div className="flex-row">
          <ul>
            {itensMenu.map((item) => {
              <li key={item.id}>
                <a href={item.url}>{item.name}</a>
                {item.hasChildren && (
                  <ul>
                    <li key={item.hasChildren.id}>
                      <a href={item.hasChildren.url}>{item.hasChildren.name}</a>
                    </li>
                  </ul>
                )}
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
