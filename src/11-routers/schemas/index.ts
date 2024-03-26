export const filterValidationSchema = {
  filter: {
    notEmpty: {
      errorMessage: 'Filter cannot be empty'
    },
    isString: {
      errorMessage: 'Filter must be a string'
    }
  },
  value: {
    notEmpty: {
      errorMessage: 'Value cannot be empty'
    },
    isString: {
      errorMessage: 'Value must be a string'
    }
  }
}

export const createValidationSchema = {
  name: {
    isLength: {
      options: {
        min: 1,
        max: 32
      },
      errorMessage: 'Name must at least 1 - 32 characters'
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty'
    },
    isString: {
      errorMessage: 'Name must be a string'
    }
  },
  price: {
    notEmpty: {
      errorMessage: 'Price cannot be empty'
    },
    isFloat: {
      errorMessage: 'Price must be a number'
    }
  },
  category: {
    isLength: {
      options: {
        min: 1,
        max: 32
      },
      errorMessage: 'Category must at least 1 - 32 characters'
    },
    notEmpty: {
      errorMessage: 'Category cannot be empty'
    },
    isString: {
      errorMessage: 'Category must be a string'
    }
  }
}
