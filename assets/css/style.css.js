const css = {
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ff00bb',
  },
}

const style = {
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
  },
  app: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  main: {
    flexDirection: 'row',
    flex: 1,
  },
  mainLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  mainRight: {
    flex: 1,
    justifyContent: 'center',
  },
  donateInput: {
    ...css.input,
    marginTop: 16,
  },
  radioArea: {
    ...css.flexRow,
  },
  amountArea: {
    ...css.flexRow,
    height: 50,
  },
  amountInput: {
    ...css.input,
    flex: 1,
    marginLeft: 16,
  },
  totalArea: {
    ...css.flexRow,
    justifyContent: 'space-between',
    height: 50,
  },
  donateBtn: {
    ...css.input,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  paddingX4: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  paddingY4: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  paddingX16: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  paddingY16: {
    paddingTop: 16,
    paddingBottom: 16,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#999',
  },
}

export default style
