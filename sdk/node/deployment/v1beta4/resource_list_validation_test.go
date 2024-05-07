package v1beta4

// func TestValidateCPUNil(t *testing.T) {
// 	_, err := validateCPU(nil)
// 	require.Error(t, err)
// }
//
// func TestValidateGPUNil(t *testing.T) {
// 	_, err := validateGPU(nil)
// 	require.Error(t, err)
// }
//
// func TestValidateMemoryNil(t *testing.T) {
// 	_, err := validateMemory(nil)
// 	require.Error(t, err)
// }
//
// func TestValidateStorageNil(t *testing.T) {
// 	_, err := validateStorage(nil)
// 	require.Error(t, err)
// }
//
// func TestValidateCPULimits(t *testing.T) {
// 	_, err := validateCPU(&types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MinUnitCPU - 1))})
// 	require.Error(t, err)
//
// 	_, err = validateCPU(&types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitCPU + 1))})
// 	require.Error(t, err)
//
// 	_, err = validateCPU(&types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MinUnitCPU))})
// 	require.NoError(t, err)
//
// 	_, err = validateCPU(&types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitCPU))})
// 	require.NoError(t, err)
// }
//
// func TestValidateGPULimits(t *testing.T) {
// 	_, err := validateGPU(&types.GPU{Units: types.NewResourceValue(uint64(validationConfig.MinUnitGPU - 1))})
// 	require.Error(t, err)
//
// 	_, err = validateGPU(&types.GPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitGPU + 1))})
// 	require.Error(t, err)
//
// 	_, err = validateGPU(&types.GPU{Units: types.NewResourceValue(uint64(validationConfig.MinUnitGPU))})
// 	require.NoError(t, err)
//
// 	_, err = validateGPU(&types.GPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitGPU))})
// 	require.NoError(t, err)
// }
//
// func TestValidateMemoryLimits(t *testing.T) {
// 	_, err := validateMemory(&types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory - 1)})
// 	require.Error(t, err)
//
// 	_, err = validateMemory(&types.Memory{Quantity: types.NewResourceValue(validationConfig.MaxUnitMemory + 1)})
// 	require.Error(t, err)
//
// 	_, err = validateMemory(&types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory)})
// 	require.NoError(t, err)
//
// 	_, err = validateMemory(&types.Memory{Quantity: types.NewResourceValue(validationConfig.MaxUnitMemory)})
// 	require.NoError(t, err)
// }
//
// func TestValidateStorageLimits(t *testing.T) {
// 	_, err := validateStorage(types.Volumes{{Quantity: types.NewResourceValue(validationConfig.MinUnitStorage - 1)}})
// 	require.Error(t, err)
//
// 	_, err = validateStorage(types.Volumes{{Quantity: types.NewResourceValue(validationConfig.MaxUnitStorage + 1)}})
// 	require.Error(t, err)
//
// 	_, err = validateStorage(types.Volumes{{Quantity: types.NewResourceValue(validationConfig.MinUnitStorage)}})
// 	require.NoError(t, err)
//
// 	_, err = validateStorage(types.Volumes{{Quantity: types.NewResourceValue(validationConfig.MaxUnitStorage)}})
// 	require.NoError(t, err)
// }
//
// type resourceListTest struct {
// 	rlist        types.ResourceGroup
// 	shouldPass   bool
// 	expErr       error
// 	expErrString string
// }
//
// func dummyResources(count int) GroupResources {
// 	return make(GroupResources, count)
// }
//
// func TestValidateResourceList(t *testing.T) {
// 	tests := []resourceListTest{
// 		{
// 			rlist:      GroupSpec{},
// 			shouldPass: false,
// 			expErr:     ErrGroupEmptyName,
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name:      "test",
// 				Resources: dummyResources(validationConfig.MaxGroupUnits + 1),
// 			},
// 			shouldPass:   false,
// 			expErrString: "group test: too many units",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID:    1,
// 							Units: types.ResourceUnits{},
// 							Count: 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "error: invalid unit CPU",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU: &types.CPU{Units: types.NewResourceValue(1000)},
// 							},
// 							Count: 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "error: invalid unit GPU",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU: &types.CPU{Units: types.NewResourceValue(1000)},
// 								GPU: &types.GPU{Units: types.NewResourceValue(0)},
// 							},
// 							Count: 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "error: invalid unit memory",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU:    &types.CPU{Units: types.NewResourceValue(1000)},
// 								GPU:    &types.GPU{Units: types.NewResourceValue(0)},
// 								Memory: &types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory)},
// 							},
// 							Count: 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "error: invalid unit storage",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU:     &types.CPU{Units: types.NewResourceValue(1000)},
// 								GPU:     &types.GPU{Units: types.NewResourceValue(0)},
// 								Memory:  &types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory)},
// 								Storage: types.Volumes{},
// 							},
// 							Count: 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass: true,
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU:     &types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitCPU))},
// 								GPU:     &types.GPU{Units: types.NewResourceValue(0)},
// 								Memory:  &types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory)},
// 								Storage: types.Volumes{},
// 							},
// 							Count: uint32(validationConfig.MaxGroupCPU/uint64(validationConfig.MaxUnitCPU)) + 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "invalid total CPU",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU:     &types.CPU{Units: types.NewResourceValue(1000)},
// 								GPU:     &types.GPU{Units: types.NewResourceValue(uint64(validationConfig.MaxUnitGPU))},
// 								Memory:  &types.Memory{Quantity: types.NewResourceValue(validationConfig.MinUnitMemory)},
// 								Storage: types.Volumes{},
// 							},
// 							Count: uint32(validationConfig.MaxGroupGPU/uint64(validationConfig.MaxUnitGPU)) + 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "invalid total GPU",
// 		},
// 		{
// 			rlist: GroupSpec{
// 				Name: "test",
// 				Resources: GroupResources{
// 					{
// 						Resource: types.Resource{
// 							ID: 1,
// 							Units: types.ResourceUnits{
// 								CPU:     &types.CPU{Units: types.NewResourceValue(uint64(validationConfig.MinUnitCPU))},
// 								GPU:     &types.GPU{Units: types.NewResourceValue(0)},
// 								Memory:  &types.Memory{Quantity: types.NewResourceValue(validationConfig.MaxUnitMemory)},
// 								Storage: types.Volumes{},
// 							},
// 							Count: uint32(validationConfig.MaxGroupMemory/validationConfig.MaxUnitMemory) + 1,
// 						},
// 					},
// 				},
// 			},
// 			shouldPass:   false,
// 			expErrString: "invalid total memory",
// 		},
// 	}
//
// 	for _, test := range tests {
// 		err := ValidateResourceList(test.rlist)
// 		if test.shouldPass {
// 			require.NoError(t, err)
// 		} else {
// 			require.Error(t, err)
// 			if test.expErr != nil {
// 				require.EqualError(t, err, test.expErr.Error())
// 			} else if test.expErrString != "" {
// 				require.True(t,
// 					strings.Contains(err.Error(), test.expErrString),
// 					fmt.Sprintf("invalid error message: expected to contain (%s) != actual(%s)", test.expErrString, err.Error()))
// 			} else {
// 				require.Error(t, err)
// 			}
// 		}
// 	}
// }
