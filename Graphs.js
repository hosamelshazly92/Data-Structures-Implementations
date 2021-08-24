// graphs
function Vertex(label = "vertex") {
    this.label = label;
}

function Graph(vtx) {
    this.vertices = vtx;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];

    for (let i = 0; i < this.vertices; i++) {
        // add subarray to store all the adjacent vertices
        this.adj[i] = [];
    }

    for (let i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }

    this.addEdge = function (a, b) {
        this.adj[a].push(b);
        this.adj[b].push(a);
        this.edges++;
    };

    this.show = function () {
        let obj = {};

        for (let i = 0; i < this.vertices; i++) {
            obj[i] = [];
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) {
                    obj[i].push(String(this.adj[i][j]));
                }
            }
        }

        return obj;
    };

    this.dfs = function (vtx = 0) {
        this.marked[vtx] = true;

        for (let i of this.adj[vtx]) {
            if (!this.marked[i]) {
                this.dfs(i);
            }
        }
    };

    this.bfs = function (start) {
        let queue = [];
        this.marked[start] = true;
        queue.push(start);

        while (queue.length > 0) {
            let vtx = queue.shift();

            for (let i of this.adj[vtx]) {
                if (!this.marked[i]) {
                    this.edgeTo[i] = vtx;
                    this.marked[i] = true;
                    queue.push(i);
                }
            }
        }
    };

    this.pathTo = function (vtx) {
        let src = 0;

        if (!this.hasPathTo(vtx)) {
            return undefined;
        }

        let path = [];

        for (let i = vtx; i != src; i = this.edgeTo[i]) {
            path.push(i);
        }

        path.push(src);

        return path;
    };

    this.hasPathTo = function (vtx) {
        return this.marked[vtx];
    };
}

module.exports = { Vertex, Graph };

let graph = new Graph(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
console.log(graph.show());
console.log(graph.pathTo(1));
