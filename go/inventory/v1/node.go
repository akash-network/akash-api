package v1

func (nd Nodes) Dup() Nodes {
	res := make(Nodes, 0, len(nd))

	for _, n := range nd {
		res = append(res, n.Dup())
	}
	return res
}

func (nd *Node) Dup() Node {
	res := Node{
		CPU:              nd.CPU.Dup(),
		GPU:              nd.GPU.Dup(),
		Memory:           nd.Memory.Dup(),
		EphemeralStorage: nd.EphemeralStorage.Dup(),
	}

	return res
}
