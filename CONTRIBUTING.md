# Contributing to `akash-api`

Welcome and thank you for considering contributing to the **akash-api** repo!
We follow the Akash Network’s general contribution standards, updated specifically for this repository.
Please read this document in full before submitting issues or PRs.

## 🚀 Getting Started

### Requirements

To contribute successfully, ensure you have:

- **Go** ≥ 1.24
- **GNU Make** ≥ 4.0
- **Bash** ≥ 4.0
- **Git**, **curl**, **jq**, **wget**  

### Setup

1. Fork and clone this repo:
    ```bash
   git clone https://github.com/<your-username>/akash-api.git
   cd akash-api
   ```
2. Install [direnv](https://direnv.net) and hook it to the [shell](https://direnv.net/docs/hook.html)
    - **MacOS**
    ```shell
    brew install direnv
    ```
3. Allow direnv within project
    ```shell
    direnv allow
    ```
4. Generate protobuf code:
	```
	make proto-gen
	```
## 🛠 How to Contribute

### Feature Requests & Bugs
* Report issues at the Akash support repo, tagged with repo/akash-api.
* All PRs must reference an open issue in the support repo. 
* Label issues suitable for new contributors as good first issue or ready-for-community-dev.
### PR Submission Checklist
Make sure you complete all items in your PRs checklist.

## 🧑‍💻 Development Guidelines

### Code Style & Format
* Use `go fmt` on all Go code. 
* Maintain idiomatic Go naming conventions (CamelCase, explicit error checks).
* Adhere to the principles of clean code.
  
### Error Handling & Comments
* Handle errors explicitly, don’t ignore them.
* Document exported types/functions with GoDoc comments.
* Document complex unexported functions.
  
### Protocol Buffer & Code Generation
* After editing .proto, run:
	```
	make proto-gen
	```
* Verify generated Go code is checked in, so downstream users can import without rebuilding.

### Commit Sign-Off
Every commit must include a sign-off:
```
Signed-off-by: Jane Doe <jane.doe@example.com>
```
or use:
```
git commit -s
```
The sign-off certifies DCO compliance.

## 🧪 Testing & CI/CD

* Tests should cover your changes—place them in `_test.go` files.
* All CI checks (format, lint, proto-gen, tests) must pass before merging.
* The CI pipeline runs workflows on pushes and PRs using GitHub Actions.

## 🏷 Release Process

Releases track only this repo’s versioning (e.g., v0.5.2).
API-breaking changes require a major version increment and announcement.
* Releases are cut by maintainers after code review and CI approval.

## 👥 Community & Support

For help, chat in Discord or raise an issue in the support repo with `repo/akash-api` tag.
Engage with SIGs and Working Groups via the Akash community calendar and Discord.

## License

By contributing, you agree that your contributions will be licensed under the project's [Apache 2.0 License](LICENSE).


## 🙏 Thank You

Your contributions help Akash grow!
By following these guidelines, you aid in maintaining code quality, clarity, and consistency for both current and future contributors.
Welcome aboard!
