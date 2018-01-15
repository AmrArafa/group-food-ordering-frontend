const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'development'
  ? 'pk_test_CtjFBG45xz8HzJTmdq90YdFq'
  : 'pk_test_CtjFBG45xz8HzJTmdq90YdFq';

export default STRIPE_PUBLISHABLE;