//iPhone 6s based rectangle data

export const pageNavData = [
    {
        pageName: "page1",
        links: [
            {
                name: "page2",
                rect: {"origin":{"x":297,"y":6},"size":{"width":63,"height":45}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "pageHome",
                rect: {"origin":{"x":9,"y":600},"size":{"width":80,"height":40}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "pageMe",
                rect: {"origin":{"x":294,"y":595},"size":{"width":71,"height":43}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            }
        ]
    },
    {
        pageName: "page2",
        links: [
            {
                name: "page1",
                rect: {"origin":{"x":154,"y":6},"size":{"width":64,"height":44}},
                parent: { "size":{"width":375,"height":647} },
                isBack: true
            },
            {
                name: "pageHome",
                rect: {"origin":{"x":9,"y":600},"size":{"width":80,"height":40}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "pageMe",
                rect: {"origin":{"x":294,"y":595},"size":{"width":71,"height":43}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            }
        ]
    },
    {
        pageName: "pageHome",
        links: [
            {
                name: "page1",
                rect: {"origin":{"x":154,"y":6},"size":{"width":64,"height":44}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "page2",
                rect: {"origin":{"x":297,"y":6},"size":{"width":63,"height":45}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "pageMe",
                rect: {"origin":{"x":294,"y":595},"size":{"width":71,"height":43}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            }
        ]
    },
    {
        pageName: "pageMe",
        links: [
            {
                name: "page1",
                rect: {"origin":{"x":154,"y":6},"size":{"width":64,"height":44}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "page2",
                rect: {"origin":{"x":297,"y":6},"size":{"width":63,"height":45}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            },
            {
                name: "pageHome",
                rect: {"origin":{"x":9,"y":600},"size":{"width":80,"height":40}},
                parent: { "size":{"width":375,"height":647} },
                isBack: false
            }
        ]
    }

];
