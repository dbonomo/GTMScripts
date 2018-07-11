var click_value_holder = dataLayer.environment.clicks;
dataLayer.push({
  'environment': {
    'clicks': (click_value_holder + 1)
  }
});
