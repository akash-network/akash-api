package v1

func (nd *NodeCapabilities) Dup() NodeCapabilities {
	res := NodeCapabilities{
		StorageClasses: make([]string, 0, len(nd.StorageClasses)),
	}

	for _, class := range nd.StorageClasses {
		res.StorageClasses = append(res.StorageClasses, class)
	}

	return res
}

func (nd Nodes) Dup() Nodes {
	res := make(Nodes, 0, len(nd))

	for _, n := range nd {
		res = append(res, n.Dup())
	}
	return res
}

func (nd *Node) Dup() Node {
	res := Node{
		Name:         nd.Name,
		Resources:    nd.Resources.Dup(),
		Capabilities: nd.Capabilities.Dup(),
	}

	return res
}

func (nd *Node) IsStorageClassSupported(class string) bool {
	for _, val := range nd.Capabilities.StorageClasses {
		if val == class {
			return true
		}
	}

	return false
}
