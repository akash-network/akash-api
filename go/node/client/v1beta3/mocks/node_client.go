// Code generated by mockery v2.45.0. DO NOT EDIT.

package mocks

import (
	context "context"

	coretypes "github.com/cometbft/cometbft/rpc/core/types"
	mock "github.com/stretchr/testify/mock"
)

// NodeClient is an autogenerated mock type for the NodeClient type
type NodeClient struct {
	mock.Mock
}

type NodeClient_Expecter struct {
	mock *mock.Mock
}

func (_m *NodeClient) EXPECT() *NodeClient_Expecter {
	return &NodeClient_Expecter{mock: &_m.Mock}
}

// CurrentBlockHeight provides a mock function with given fields: _a0
func (_m *NodeClient) CurrentBlockHeight(_a0 context.Context) (int64, error) {
	ret := _m.Called(_a0)

	if len(ret) == 0 {
		panic("no return value specified for CurrentBlockHeight")
	}

	var r0 int64
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) (int64, error)); ok {
		return rf(_a0)
	}
	if rf, ok := ret.Get(0).(func(context.Context) int64); ok {
		r0 = rf(_a0)
	} else {
		r0 = ret.Get(0).(int64)
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(_a0)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NodeClient_CurrentBlockHeight_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'CurrentBlockHeight'
type NodeClient_CurrentBlockHeight_Call struct {
	*mock.Call
}

// CurrentBlockHeight is a helper method to define mock.On call
//   - _a0 context.Context
func (_e *NodeClient_Expecter) CurrentBlockHeight(_a0 interface{}) *NodeClient_CurrentBlockHeight_Call {
	return &NodeClient_CurrentBlockHeight_Call{Call: _e.mock.On("CurrentBlockHeight", _a0)}
}

func (_c *NodeClient_CurrentBlockHeight_Call) Run(run func(_a0 context.Context)) *NodeClient_CurrentBlockHeight_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context))
	})
	return _c
}

func (_c *NodeClient_CurrentBlockHeight_Call) Return(_a0 int64, _a1 error) *NodeClient_CurrentBlockHeight_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *NodeClient_CurrentBlockHeight_Call) RunAndReturn(run func(context.Context) (int64, error)) *NodeClient_CurrentBlockHeight_Call {
	_c.Call.Return(run)
	return _c
}

// SyncInfo provides a mock function with given fields: _a0
func (_m *NodeClient) SyncInfo(_a0 context.Context) (*coretypes.SyncInfo, error) {
	ret := _m.Called(_a0)

	if len(ret) == 0 {
		panic("no return value specified for SyncInfo")
	}

	var r0 *coretypes.SyncInfo
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context) (*coretypes.SyncInfo, error)); ok {
		return rf(_a0)
	}
	if rf, ok := ret.Get(0).(func(context.Context) *coretypes.SyncInfo); ok {
		r0 = rf(_a0)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*coretypes.SyncInfo)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context) error); ok {
		r1 = rf(_a0)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// NodeClient_SyncInfo_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'SyncInfo'
type NodeClient_SyncInfo_Call struct {
	*mock.Call
}

// SyncInfo is a helper method to define mock.On call
//   - _a0 context.Context
func (_e *NodeClient_Expecter) SyncInfo(_a0 interface{}) *NodeClient_SyncInfo_Call {
	return &NodeClient_SyncInfo_Call{Call: _e.mock.On("SyncInfo", _a0)}
}

func (_c *NodeClient_SyncInfo_Call) Run(run func(_a0 context.Context)) *NodeClient_SyncInfo_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context))
	})
	return _c
}

func (_c *NodeClient_SyncInfo_Call) Return(_a0 *coretypes.SyncInfo, _a1 error) *NodeClient_SyncInfo_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *NodeClient_SyncInfo_Call) RunAndReturn(run func(context.Context) (*coretypes.SyncInfo, error)) *NodeClient_SyncInfo_Call {
	_c.Call.Return(run)
	return _c
}

// NewNodeClient creates a new instance of NodeClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewNodeClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *NodeClient {
	mock := &NodeClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}