import React, { Component } from "react";
import logo from "./images/logo.svg";
import image from "./images/expand-vertical-4.svg";
import "./scss/App.css";
import Collapsible from "./components/Collapsible";

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<img src={image} />
					<h1>Collapsible Content</h1>
				</header>
				<div className="content">
					<div className="panel-group">
						<Collapsible title="Overview">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio provident quia quaerat labore voluptates maiores
								ducimus dolorem repellendus omnis vel incidunt, perferendis
								error nihil minima, sit doloribus. Commodi, eaque quisquam! Quam
								dolores tempore assumenda doloribus aliquid, dignissimos
								explicabo a qui maxime illo ad officia commodi pariatur quod
								eaque ex? Sunt, nihil deleniti! Inventore quisquam, pariatur
								velit doloremque ratione eligendi minima. Saepe fuga beatae
								eligendi voluptatum asperiores, soluta deleniti ut debitis
								facere, id provident illo ratione pariatur ipsam culpa magni
								harum amet delectus odit placeat rem nostrum sapiente? Deserunt,
								quae eius. Reiciendis eligendi, illum minus nihil porro iusto
								dicta voluptas eaque commodi temporibus, animi eveniet, amet
								vitae? Ipsa impedit quaerat iste enim ea temporibus error
								laboriosam culpa, amet dolores! Accusantium, accusamus.
								Voluptates ab at deserunt veniam esse, magnam obcaecati,
								accusantium similique quisquam, quia asperiores molestiae
								doloremque inventore nulla suscipit? Tempora voluptates alias
								possimus consequuntur cupiditate sunt veritatis dolorem magni ad
								voluptatem! Quos distinctio dolores debitis obcaecati libero,
								nostrum unde repellat, facere quae ipsum eum tenetur minima non,
								fuga enim recusandae! Harum nostrum maxime, a placeat molestias
								obcaecati! Est necessitatibus cupiditate modi. Voluptatibus quo
								voluptatum praesentium sit consequatur, minus fugit quibusdam
								totam ratione pariatur itaque cumque veritatis reiciendis
								repellat placeat eum incidunt nulla voluptates cum iusto
								laudantium sint harum laboriosam! Fugiat, adipisci. Fuga quos
								nisi beatae cum cumque, suscipit eveniet, nemo consectetur
								itaque dolorem maiores libero repudiandae, temporibus ut facilis
								autem officia soluta voluptas quaerat asperiores doloribus
								excepturi dolorum aliquam? Ducimus, unde? Deleniti voluptatem
								cupiditate omnis, nostrum rem eveniet quia voluptatibus nisi.
								Doloribus atque rerum, amet maiores aperiam dolorum. A veniam
								molestiae similique possimus doloribus quos, reprehenderit
								tenetur cupiditate. Consectetur, ab et. Corrupti veritatis
								reiciendis voluptates velit, ut facilis vero explicabo mollitia,
								unde veniam molestias quidem magni ipsam eius ad alias quia ex
								minus impedit est ab. Voluptatibus fugit corporis blanditiis
								cum!
              </p>
						</Collapsible>
						<Collapsible title="Features">
							<p>
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute.
              </p>
						</Collapsible>
						<Collapsible title="Software">
							<p>
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute.
              </p>
						</Collapsible>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
