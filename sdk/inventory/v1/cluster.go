package v1

func (cl *Cluster) Dup() *Cluster {
	res := &Cluster{
		Nodes:   cl.Nodes.Dup(),
		Storage: cl.Storage.Dup(),
	}

	return res
}
