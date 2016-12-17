(function () {
    let items = document.querySelectorAll('.nav-item .id'),
        subItems = document.querySelectorAll('.nav-item .sub-item'),
        _lastIndex = null;

    let displayItems = (e) => {
        let itemsArray = makeArray(items),
            subItemsArray = makeArray(subItems),
            itemsTarget = e.target,
            itemsIndex = itemsArray.indexOf(itemsTarget),
            subItemsIndex = itemsIndex;

        if (!subItemsArray[subItemsIndex].classList.contains('show-sub-item')) {
            subItemsArray[subItemsIndex].classList.add('show-sub-item');
            if (_lastIndex != null) {
                if(_lastIndex != subItemsIndex) subItemsArray[_lastIndex].classList.remove('show-sub-item');
            }
            _lastIndex = subItemsIndex;
        } else {
            subItemsArray[subItemsIndex].classList.remove('show-sub-item');
        }
    };

    let init = () => {
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', displayItems, false);
        }
    };

    let makeArray = (items) => {
        let array = [];
        for (let i = 0; i < items.length; i++) {
            array.push(items[i]);
        }
        return array;
    };

    init();
})();