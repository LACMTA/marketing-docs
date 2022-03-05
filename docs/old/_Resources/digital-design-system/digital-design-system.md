# Digital Design System

The Metro Digital Design System is a collection of components that are designed to be used in conjunction with digital Metro Projects. The purpose is to re-use and streamline the development of Metro websites.

## How to use - Vanilla JavaScript

!!! info
    Support for node.js and other package mangement is planned.

You should include both the CSS and JavaScript files in order to use this Digital Design System.

### CSS

``` html
<link rel="stylesheet" href="https://lacmta.github.io/design-system/dist/css/uswds.min.css" type="text/css">
```

### JavaScript 

``` html
<script src="https://lacmta.github.io/design-system/dist/js/uswds.min.js"></script>
<script src="https://lacmta.github.io/design-system/dist/js/uswds-init.min.js"></script>
```

The following website lists the supported components to use in your application.

![https://lacmta.github.io/design-system/build/](./media/metro_digital_design_system.png)

[https://lacmta.github.io/design-system/build/](https://lacmta.github.io/design-system/build/)

## For Developers

### Install Manually

Start here: https://designsystem.digital.gov/documentation/fundamentals/

Make sure `node` and `npm` are installed.

Follow the instructions to use `npm init` to create a `package.json` file and then install the `uswds` package via `npm`.

Next, go down to the section about `uswds-gulp`: https://designsystem.digital.gov/documentation/fundamentals/#how-to-compile-using-uswds-gulp

First install `gulp-cli` using `npm install gulp-cli -g`, then follow the instructions to install `uswds-gulp`.

Continue following the instructions to create the default directories in `gulpfile.js`.

!!! warning
    The dependencies do not already include the `del` package and if you try to initialize gulp you will get an error message.  Manually install `del` by running: `npm install --save del`

### Install by Cloning Repo

Follow the instructions here: https://github.com/LACMTA/metro-design-system-gulp

## Acknowledgements

The Metro Digital Design System is a fork of the [US Web Design System](https://designsystem.digital.gov/).

## Contributing

If you'd like to contribute to the Digital Design System, please visit the [Action Group page](working_groups/digital_design_system/) or feel free to contribute to the [GitHub repository](https://github.com/LACMTA/design-system/).