// Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find(item => item.hash === hash);

    if (objectInCache) {
      console.log('Из кеша: ' + objectInCache.value);
      return 'Из кеша: ' + objectInCache.value;
    }

    const result = func(...args);
    cache.push({ hash: hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result;
  }

  return wrapper;
}

// Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isThrottled = false;

  function wrapper(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, delay);

    if (!isThrottled) {
      func.apply(this, args);
      wrapper.count++;
      isThrottled = true;
    }

    wrapper.allCount++;
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
