import React, { Component } from "react";  
import PropTypes from "prop-types";  
import _ from "lodash";  
import { Table } from "@buffetjs/core";  
import {  
  Bool as BoolIcon,
  Json as JsonIcon,
  Text as TextIcon,
  NumberIcon,
  Email as EmailIcon,
  Calendar as DateIcon,
  RichText as XmlIcon
} from "@buffetjs/icons";
import MappingOptions from "./MappingOptions";  
import TargetFieldSelect from "./TargetFieldSelect";  
import Row from "../Row";

class MappingTable extends Component {  
  state = { mapping: {} };

}

MappingTable.propTypes = {  
  analysis: PropTypes.object.isRequired,
  targetModel: PropTypes.object,
  onChange: PropTypes.func
};

export default MappingTable;  