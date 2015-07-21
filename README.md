# ngRange
An Angularjs &lt;input type="range"> html tag that avoids the wrong value position on init

# Requirements
angularjs 1.2+

# Usage
```
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
ngRangeMin | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The optional minimum value of the range (0 if it's omitted). 
ngRangeMax | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The optional maximum value of the range (100 if it's omitted). 
ngRangeStep | [expression](https://code.angularjs.org/1.3.16/docs/guide/expression) | The optional step value of the range (1 if it's omitted). 
ngModel | string | Assignable angular expression to data-bind to. 
