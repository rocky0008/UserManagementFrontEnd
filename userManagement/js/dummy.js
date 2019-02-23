$('#userLogin').bootstrapValidator({
    //        live: 'disabled',
    message: 'This value is not valid',

    fields: {
        password: {
            validators: {
                notEmpty: {
                    message: 'The password is required and cannot be empty'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The email address is not valid'
                }
            }
        },

    }
});