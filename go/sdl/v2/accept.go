package v2

import (
	"net/url"

	"gopkg.in/yaml.v3"
)

func (p *Accept) UnmarshalYAML(node *yaml.Node) error {
	var accept []string
	if err := node.Decode(&accept); err != nil {
		return err
	}

	for _, item := range accept {
		if _, err := url.ParseRequestURI("http://" + item); err != nil {
			return err
		}
	}

	p.Items = accept

	return nil
}
