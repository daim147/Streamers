// ! FORM WITH REACT FINAL FORM

import React from "react";
import { Form, Field } from "react-final-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    //! meta contain every thing about input
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {meta.touched && meta.error ? this.onErrorMessage(meta) : ""}
      </div>
    );
  };

  onErrorMessage = ({ error }) => (
    <div className="ui error message">
      <div className="header">{error}</div>
    </div>
  );
  onSubmit = (formValue) => {
    this.props.onSubmit(formValue);
  };

  validate = (formValue) => {
    // ! It will run every time the user perform any acion focusing, selecting , touching, writing ,sumbit almost every time

    // !  if the form is valid just return empty objet or if there is any error just check and place the error in same name where is error and put in object
    const error = {};
    if (!formValue.Title) {
      error.Title = "You must enter title";
    }
    if (!formValue.Description) {
      error.Description = "You must enter description";
    }

    return error;
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="ui form error">
            <Field
              name="Title"
              component={this.renderInput}
              label="Enter Stream Title"
            />
            <Field
              name="Description"
              component={this.renderInput}
              label="Enter Stream Description"
            />
            <button className="ui button secondary">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default StreamForm;

// ! FORM WITH REDUX FORM

// import React from "react";
// import { Field, reduxForm } from "redux-form";

// class StreamForm extends React.Component {
//   renderInput = ({ input, label, meta }) => {
//     //! meta contain every thing about input
//     const className = `field ${meta.touched && meta.error ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} />
//         {meta.touched && meta.error ? this.onErrorMessage(meta) : ""}
//       </div>
//     );
//   };

//   onErrorMessage = ({ error }) => (
//     <div className="ui error message">
//       <div className="header">{error}</div>
//     </div>
//   );
//   onSubmit = (formValue) => this.props.onSubmit(formValue);

//   render() {
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//       >
//         <Field
//           name="Title"
//           component={this.renderInput}
//           label="Enter Stream Title"
//         />
//         <Field
//           name="Description"
//           component={this.renderInput}
//           label="Enter Stream Description"
//         />
//         <button className="ui button secondary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValue) => {
//   // ! It will run every time the user perform any acion focusing, selecting , touching, writing ,sumbit almost every time

//   // !  if the form is valid just return empty objet or if there is any error just check and place the error in same name where is error and put in object
//   const error = {};
//   if (!formValue.Title) {
//     error.Title = "You must enter title";
//   }
//   if (!formValue.Description) {
//     error.Description = "You must enter description";
//   }

//   return error;
// };

// export default reduxForm({
//   form: "StreamForm",
//   validate,
// })(StreamForm);
