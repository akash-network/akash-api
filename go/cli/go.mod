module pkg.akt.dev/go/cli

go 1.22.2

toolchain go1.22.5

require (
	cosmossdk.io/errors v1.0.1
	github.com/cometbft/cometbft v0.37.6
	github.com/cosmos/cosmos-sdk v0.47.12
	github.com/cosmos/gogoproto v1.4.12
	github.com/spf13/cobra v1.8.0
	github.com/spf13/pflag v1.0.5
	github.com/spf13/viper v1.18.2
	gopkg.in/yaml.v3 v3.0.1
	pkg.akt.dev/go v0.0.1-rc2
	pkg.akt.dev/go/sdl v0.0.1-rc0
)

replace (
	github.com/gogo/protobuf => github.com/cosmos/gogoproto v1.3.3-alpha.regen.1
)
