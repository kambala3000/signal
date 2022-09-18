# Signal

https://signal-six.vercel.app/

The application that allows you to create the optimal daily menu for you and your family in accordance with the recommendations of Canada's Food Guide.

---
## About project

The Government of Canada wishes to provide the Canada Food Guide as an online service to improve the health of Canadians. To test the idea an MVP was outlined by the product owner.  They are looking to adopt modern cloud-based methodologies to deploy a scalable healthy eating API.  

The roadmap includes adding preference features and automatic weekly shopping lists with options to set up healthy grocery delivery via Amazon Prime. This roadmap is out of scope for this project.

[related story](https://www.cbc.ca/news/canada/experts-say-canada-s-food-guide-needs-an-update-1.2669848) 

**User daily menu**

As a user  
I want to see an optimal daily menu  
so that I can improve my health

**Family daily menu**

As a family   
I want to see an optimal daily menu for my family   
And I want a breakdown per family member  
So that I can improve the health of my family

---

## Development
This project uses [Create React App](https://github.com/facebook/create-react-app) with the `typescript` preset.

`npm start` – run app in dev mode

`npm run build` – build production version to the `build` folder

`npm run test` – runs the test watcher in an interactive mode

`npm run eject` – move all the configuration and build  will directly into the project folder

`npm run prepare` – init git hooks using [husky](https://github.com/typicode/husky)

`npm run generate-data` – convert data from CSV to Javascript arrays and create `.js` file containing generated arrays 

We recommend to setup [Commitizen](https://github.com/commitizen/cz-cli) to make beautiful commit messages. Also, you can consider setup [Prettier](https://github.com/prettier/prettier)  extension into your favorite editor to take more from this powerful utility.

## TODO

- [x] Setup project configuration
- [x] Allow user to enter family member's data which will be used to build daily menu 
- [x] Calculate daily menu
- [x] Show the daily menu with a breakdown per family member
- [x] Add readme
- [x] Deploy to [Vercel](https://vercel.com/)
- [ ] Style the app
- [ ] Add tests
- [ ] Setup CI using [GitHub Actions](https://github.com/features/actions)
