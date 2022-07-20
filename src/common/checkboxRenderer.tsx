const CheckboxRenderer = () => {}

CheckboxRenderer.prototype.init = function(params:any) {
    this.params = params;

    this.eGui = document.createElement('input');
    this.eGui.type = 'checkbox';
    this.eGui.checked = params.value;
}

// CheckboxRenderer.prototype.checkedHandler = function(e) {
//     let checked = e.target.checked;
//     let colId = this.params.column.colId;
//     this.params.node.setDataValue(colId, checked);
// }
//
// CheckboxRenderer.prototype.getGui = function(params) {
//     return this.eGui;
// }
//
// CheckboxRenderer.prototype.destroy = function(params) {
//     this.eGui.removeEventListener('click', this.checkedHandler);
// }

export default CheckboxRenderer;