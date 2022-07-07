import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: true,
      layouts: {
        lg: generateLayout(
          this.props.range,
          this.props.child_list,
          this.props.height
        ),
      },
      range: this.props.range,
      children: this.props.children,
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true }, () => {
      console.log("range  ", this.props.range);
      console.log("range  ", this.state.range);
      console.log("range  ", this.state.children);
    });
  }

  generateDOM(lauout, list) {
    return list.map(function (l, i) {
      return <div key={i}>{l}</div>;
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint,
    });
  }

  onLayoutChange(layout, layouts) {
    console.log("layout ", layout);
    console.log("layouts ", layouts);
    this.props.onLayoutChange(layout, layouts);
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={true}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM(this.state.children, this.props.child_list)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  range: PropTypes.number,
  child_list: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 45,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
};

function generateLayout(range, child, height) {
  return child.map(function (item, i) {
    var y = height;
    return {
      x: (_.random(0, 2) * 2) % 12,
      y: Math.floor(i / 2) * y,
      w: 100,
      h: y,
      i: i.toString(),
      child_: item,
    };
  });
}
