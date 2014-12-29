// 覆盖默认英文为中文
L.drawLocal.draw.toolbar = {
    actions: {
        title: '取消绘制',
        text: '取消'
    },
    undo: {
        title: '删除最后一次绘制的点',
        text: '删除最后一个点'
    },
    buttons: {
        polyline: '绘制折线',
        polygon: '绘制多边形',
        rectangle: '绘制矩形',
        circle: '绘制圆形',
        marker: '放置标记'
    }
};
L.drawLocal.draw.handlers = {
    circle: {
        tooltip: {
            start: '点击并拖拽绘制一个圆.'
        }
    },
    marker: {
        tooltip: {
            start: '点击地图放置一个标记.'
        }
    },
    polygon: {
        tooltip: {
            start: '点击开始绘制形状.',
            cont: '点击继续绘制形状.',
            end: '点击起始点关闭形状.'
        }
    },
    polyline: {
        error: '<strong>错误:</strong> 形状边缘不能交叉!',
        tooltip: {
            start: '点击开始绘制线条.',
            cont: '点击继续绘制线条.',
            end: '点击最后一个点结束.'
        }
    },
    rectangle: {
        tooltip: {
            start: '点击并拖拽绘制矩形.'
        }
    },
    simpleshape: {
        tooltip: {
            end: '释放鼠标结束绘制.'
        }
    }
};
L.drawLocal.draw.edit = {
    toolbar: {
        actions: {
            save: {
                title: '保存修改.',
                text: '保存'
            },
            cancel: {
                title: '取消编辑,抛弃所有修改.',
                text: '取消'
            }
        },
        buttons: {
            edit: '编辑层.',
            editDisabled: '没有层可编辑.',
            remove: '删除所有层.',
            removeDisabled: '没有层可删除.'
        }
    },
    handlers: {
        edit: {
            tooltip: {
                text: 'Drag handles, or marker to edit feature.',
                subtext: '点击取消撤销修改.'
            }
        },
        remove: {
            tooltip: {
                text: '左键单击删除在地图上的形状'
            }
        }
    }
};