class TreeNode {
  name: string;
  children: [TreeNode];
  value: number;
  constructor({
    name,
    value = 25,
    children = []
  }: {
    name;
    value?;
    children?;
  }) {
    this.name = name;
    this.children = children;
    this.value = value;
  }
}

function get_energy_allocation() {
  const health = new TreeNode({
    name: "Health",
    children: [
      { name: "Physical", value: 25 },
      { name: "Emotional", value: 10 },
      { name: "Cognative", value: 25 }
    ],
    value: 25
  });
  const hobbies = new TreeNode({
    name: "Hobbies",
    children: [
      new TreeNode({
        name: "Magic",
        value: 25,
        children: [
          new TreeNode({ name: "Card Magic" }),
          new TreeNode({ name: "Coin Magic" }),
          new TreeNode({ name: "Band Magic" })
        ]
      }),
      new TreeNode({ name: "Biking", value: 10 }),
      new TreeNode({ name: "Tech", value: 25 })
    ],
    value: 0
  });
  const relationships = new TreeNode({
    name: "Relationships",
    children: [
      {
        name: "Kids",
        children: [
          new TreeNode({ name: "Zach" }),
          new TreeNode({ name: "Amelia" })
        ],
        value: 25
      },
      new TreeNode({ name: "Wife", value: 25 }),
      new TreeNode({ name: "Friends", value: 50 })
    ],
    value: 0
  });
  const work = new TreeNode({ name: "Work", children: [], value: 10 });

  const root = new TreeNode({
    name: "Invest in",
    children: [health, hobbies, relationships, work],
    value: 0
  });
  return root;
}

// sunburst format is an inorder traversal of the tree.
// good thing to unit test

function* in_order_walk(node: TreeNode) {
  let Q = [];
  Q.push([node, null]);
  while (Q.length > 0) {
    const [current, parent] = Q.shift();
    for (const child of current.children ?? []) {
      Q.push([child, current]);
    }
    yield [current, parent];
  }
}

// ids
// labels
// parents
// values
function tree_to_plotly_sunburst_format(root) {
  const out = {
    ids: [],
    labels: [],
    parents: [],
    values: []
  };

  for (const [current, parent] of in_order_walk(root)) {
    out.ids.push(current.name);
    out.labels.push(current.name);
    out.values.push(current.value);
    out.parents.push(parent?.name);
  }

  return out;
}

var sunburst_data = [
  {
    type: "sunburst",
    outsidetextfont: { size: 20, color: "#377eb8" },
    // leaf: {opacity: 0.4},
    marker: { line: { width: 2 } },
    maxdepth: 2
  }
];

var layout = {
  margin: { l: 0, r: 0, b: 0, t: 0 },
  sunburstcolorway: ["#636efa", "#ef553b", "#00cc96"]
};

async function sunburst_loader() {
  if (!document.URL.includes("sunburst")) {
    return;
  }
  console.log("drawing sunburst");
  const root = get_energy_allocation();
  const sunburst_data2 = tree_to_plotly_sunburst_format(root);
  sunburst_data[0]["ids"] = sunburst_data2.ids;
  sunburst_data[0]["labels"] = sunburst_data2.labels;
  sunburst_data[0]["parents"] = sunburst_data2.parents;
  sunburst_data[0]["values"] = sunburst_data2.values;

  const sunburstPlot = await Plotly.newPlot("sunburst", sunburst_data, layout);
  sunburstPlot.on("plotly_sunburstclick", event => {
    const point = event.points[0];
    console.log(`sunburst click:`);
    console.log(point.label);
    console.log(point["currentPath"]);
    $("#sunburst_text").text(point.label);
  });
}

$(sunburst_loader);
