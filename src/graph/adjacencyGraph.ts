class Vertice {
	id: any;
	adj: AdjList;
	constructor(id) {
		this.id = id;
		this.adj = new AdjList();
	}

}

class AdjNode {
	v: Vertice;
	next: AdjNode;
	constructor(v: Vertice) {
		this.v = v;
		this.next = null;
	}
}

class AdjList {
	head: AdjNode;
	constructor() {
		this.head = null;
	}
	add(n: AdjNode) {
		n.next = this.head;
		this.head = n;
	}
}

export class Graph {
	g: Array<Vertice>;
	public v: number;
	constructor() {
		this.g = [];
	}
	addVertice(id) {
		const vertice = new Vertice(id);
		this.g.push(vertice);
		return vertice;
	}
	addEdge(u, v) {
		const vertice = this.findVertice(u);
		if (vertice === null) {
			console.error('Source vertice does not exists');
			return;
		}
		let destV = this.findVertice(v);
		if (destV === null) {
			destV = this.addVertice(v);
		}
		const adjNode = new AdjNode(destV);
		vertice.adj.add(adjNode);
	}
	findVertice(u) {
		for( let i = 0; i< this.g.length; i++) {
			if (this.g[i].id === u) {
				return this.g[i];
			}
		}
		return null;
	}
}