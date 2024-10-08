import axios from "axios";
const jnmtestAPI = axios.create({
  baseURL: "https://jnmtest-49150.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return jnmtestAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_dog_list(payload) {
  return jnmtestAPI.get(`/api/v1/dog/`);
}

function api_v1_dog_create(payload) {
  return jnmtestAPI.post(`/api/v1/dog/`, payload);
}

function api_v1_dog_retrieve(payload) {
  return jnmtestAPI.get(`/api/v1/dog/${payload.id}/`);
}

function api_v1_dog_update(payload) {
  return jnmtestAPI.put(`/api/v1/dog/${payload.id}/`, payload);
}

function api_v1_dog_partial_update(payload) {
  return jnmtestAPI.patch(`/api/v1/dog/${payload.id}/`, payload);
}

function api_v1_dog_destroy(payload) {
  return jnmtestAPI.delete(`/api/v1/dog/${payload.id}/`);
}

function api_v1_hbcbd_list(payload) {
  return jnmtestAPI.get(`/api/v1/hbcbd/`);
}

function api_v1_hbcbd_create(payload) {
  return jnmtestAPI.post(`/api/v1/hbcbd/`, payload);
}

function api_v1_hbcbd_retrieve(payload) {
  return jnmtestAPI.get(`/api/v1/hbcbd/${payload.id}/`);
}

function api_v1_hbcbd_update(payload) {
  return jnmtestAPI.put(`/api/v1/hbcbd/${payload.id}/`, payload);
}

function api_v1_hbcbd_partial_update(payload) {
  return jnmtestAPI.patch(`/api/v1/hbcbd/${payload.id}/`, payload);
}

function api_v1_hbcbd_destroy(payload) {
  return jnmtestAPI.delete(`/api/v1/hbcbd/${payload.id}/`);
}

function api_v1_login_create(payload) {
  return jnmtestAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return jnmtestAPI.post(`/api/v1/signup/`, payload);
}

function rest_auth_login_create(payload) {
  return jnmtestAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_create(payload) {
  return jnmtestAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return jnmtestAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return jnmtestAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return jnmtestAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return jnmtestAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_resend_email_create(payload) {
  return jnmtestAPI.post(`/rest-auth/registration/resend-email/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return jnmtestAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return jnmtestAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return jnmtestAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return jnmtestAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_dog_list,
  api_v1_dog_create,
  api_v1_dog_retrieve,
  api_v1_dog_update,
  api_v1_dog_partial_update,
  api_v1_dog_destroy,
  api_v1_hbcbd_list,
  api_v1_hbcbd_create,
  api_v1_hbcbd_retrieve,
  api_v1_hbcbd_update,
  api_v1_hbcbd_partial_update,
  api_v1_hbcbd_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};