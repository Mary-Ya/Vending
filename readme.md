# Cup of Tea - Machine

## Functions
Idea was to implement most simple vending machine.
My exemplar can do only the main functions:
* You can pay for your tea with only one available coin;
* You can choose sort of tea;
* You can take you tea.

I decided to focus on this functions because they are represent a full cycle of user experience with this vending.

I omit such functions as
- a certain type of coins intake;
- change giving;
- give a fake money back;
- payment with credit card;
- choose extensions (add sugar/milk);
- limit goods in machine;
- maintaining (open and take money, add tea to machine);
- etc.
because this functions are can be added on existing vending machine.

## UI
Interface made flat and structured as real machine - it has controls block, showcase and delivery parts.
Elements styled with BEM.

Disadvantages:
UI was made fast and was not tested on mobiles.
It's not pixel-perfect either.

## Usage
```
npm start
```

## Boilerplate
It works, have simple structure, have hot loader, set for React, Redux, SCSS applications.

https://github.com/DimitriMikadze/express-react-redux-starter.git

## Packages
I'd try to keep project minimalistic, so use only necessary libraries and tools.
Test-tools and jQuery were removed as excess.

### React
Is required.

### Redux
Logic of vending machine is simple to imagine in Redux ideas, because real vending is literally reacts on user actions.

### Lint and stuff
Used to follow some rules to provide code maintenance.
Some rules were changed in purpose to fit project needs.

