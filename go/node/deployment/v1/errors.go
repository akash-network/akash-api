package v1

import (
	cerrors "cosmossdk.io/errors"
)

const (
	errNameDoesNotExist uint32 = iota + 1
	errInvalidRequest
	errDeploymentExists
	errDeploymentNotFound
	errDeploymentClosed
	errOwnerAcctMissing
	errInvalidGroups
	errInvalidDeploymentID
	errEmptyHash
	errInvalidHash
	errInternal
	errInvalidDeployment
	errInvalidGroupID
	errGroupNotFound
	errGroupClosed
	errGroupOpen
	errGroupPaused
	errGroupNotOpen
	errGroupSpec
	errInvalidDeposit
	errInvalidIDPath
	errInvalidParam
	errInvalidDeploymentDepositor
)

var (
	// ErrNameDoesNotExist is the error when name does not exist
	ErrNameDoesNotExist = cerrors.Register(ModuleName, errNameDoesNotExist, "Name does not exist")
	// ErrInvalidRequest is the error for invalid request
	ErrInvalidRequest = cerrors.Register(ModuleName, errInvalidRequest, "Invalid request")
	// ErrDeploymentExists is the error when already deployment exists
	ErrDeploymentExists = cerrors.Register(ModuleName, errDeploymentExists, "Deployment exists")
	// ErrDeploymentNotFound is the error when deployment not found
	ErrDeploymentNotFound = cerrors.Register(ModuleName, errDeploymentNotFound, "Deployment not found")
	// ErrDeploymentClosed is the error when deployment is closed
	ErrDeploymentClosed = cerrors.Register(ModuleName, errDeploymentClosed, "Deployment closed")
	// ErrOwnerAcctMissing is the error for owner account missing
	ErrOwnerAcctMissing = cerrors.Register(ModuleName, errOwnerAcctMissing, "Owner account missing")
	// ErrInvalidGroups is the error when groups are empty
	ErrInvalidGroups = cerrors.Register(ModuleName, errInvalidGroups, "Invalid groups")
	// ErrInvalidDeploymentID is the error for invalid deployment id
	ErrInvalidDeploymentID = cerrors.Register(ModuleName, errInvalidDeploymentID, "Invalid: deployment id")
	// ErrEmptyHash is the error when version is empty
	ErrEmptyHash = cerrors.Register(ModuleName, errEmptyHash, "Invalid: empty hash")
	// ErrInvalidHash is the error when version is invalid
	ErrInvalidHash = cerrors.Register(ModuleName, errInvalidHash, "Invalid: deployment hash")
	// ErrInternal is the error for internal error
	ErrInternal = cerrors.Register(ModuleName, errInternal, "internal error")
	// ErrInvalidDeployment = is the error when deployment does not pass validation
	ErrInvalidDeployment = cerrors.Register(ModuleName, errInvalidDeployment, "Invalid deployment")
	// ErrInvalidGroupID is the error when already deployment exists
	ErrInvalidGroupID = cerrors.Register(ModuleName, errInvalidGroupID, "Deployment exists")
	// ErrGroupNotFound is the keeper's error for not finding a group
	ErrGroupNotFound = cerrors.Register(ModuleName, errGroupNotFound, "Group not found")
	// ErrGroupClosed is the error when deployment is closed
	ErrGroupClosed = cerrors.Register(ModuleName, errGroupClosed, "Group already closed")
	// ErrGroupOpen is the error when deployment is closed
	ErrGroupOpen = cerrors.Register(ModuleName, errGroupOpen, "Group open")
	// ErrGroupPaused is the error when deployment is closed
	ErrGroupPaused = cerrors.Register(ModuleName, errGroupPaused, "Group paused")
	// ErrGroupNotOpen indicates the Group state has progressed beyond initial Open.
	ErrGroupNotOpen = cerrors.Register(ModuleName, errGroupNotOpen, "Group not open")
	// ErrGroupSpecInvalid indicates a GroupSpec has invalid configuration
	ErrGroupSpecInvalid = cerrors.Register(ModuleName, errGroupSpec, "GroupSpec invalid")
	// ErrInvalidDeposit indicates an invalid deposit
	ErrInvalidDeposit = cerrors.Register(ModuleName, errInvalidDeposit, "Deposit invalid")
	// ErrInvalidIDPath indicates an invalid ID path
	ErrInvalidIDPath = cerrors.Register(ModuleName, errInvalidIDPath, "ID path invalid")
	// ErrInvalidParam indicates an invalid chain parameter
	ErrInvalidParam = cerrors.Register(ModuleName, errInvalidParam, "parameter invalid")
	// ErrInvalidDeploymentDepositor indicates an invalid chain parameter
	ErrInvalidDeploymentDepositor = cerrors.Register(ModuleName, errInvalidDeploymentDepositor, "invalid deployment depositor")
)
