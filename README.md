# ngRange
An Angularjs &lt;input type="range"> html tag that avoids the wrong value position on init

# Requirements
angularjs 1.2+

# Usage
```
<script type="text/javascript" src="[PATH]/angular.min.js"></script>
<script type="text/javascript" src="[PATH]/ngRange.js"></script>
...
<script>
  var module = angular.module(
    ...,
    [
      ...
      'ngRange',
      ...
    ]
  );
</script>
...
<ngRange 
  ngRangeMin="" 
  ngRangeMax="" 
  ngRangeStep="" 
  ngModel="">
...
</ngRange>
```

Param | Type | Details
------|------|--------
ngRangeMin *(optional)* | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The minimum value of the range (default 0). 
ngRangeMax *(optional)* | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The maximum value of the range (default 100). 
ngRangeStep *(optional)* | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The step value of the range (default 1). 
ngModel | string | Assignable angular expression to data-bind to. 
