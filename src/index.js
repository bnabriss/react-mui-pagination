import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    boxShadow: theme.shadows[0]
  }
}));


const Pagination =
  (
    {
      total,
      page = 1,
      perPage = 10,
      numOfLinks = 5,
      hidePrevNext = false,
      hideFirstLast = false,

      linksShadow = 0,
      linksColor = 'default',
      activeLinkColor = 'primary',
      LinksComponent = Fab,
      linksProps = {},
      activeProps = {},


      prevNextShadow = 0,
      prevNextColor = 'default',
      PrevNextComponent = IconButton,
      prevNextProps = {},
      nextProps = {},
      prevProps = {},
      prevContent = '',
      nextContent = '',

      firstLastShadow = 0,
      firstLastColor = 'default',
      FirstLastComponent = IconButton,
      firstLastProps = {},
      firstProps = {},
      lastProps = {},
      firstContent = '',
      lastContent = '',

      setPage = () => { }
    }) => {
    const theme = useTheme();
    const classes = useStyles();

    const firstPage = 1;
    const lastPage = Math.ceil(total / perPage);
    let firstVisiblePage = Math.max(page - Math.floor((numOfLinks - 1) / 2), firstPage);
    const lastVisiblePage = Math.min(firstVisiblePage - 1 + numOfLinks, lastPage);
    firstVisiblePage = Math.max(lastVisiblePage + 1 - numOfLinks, firstPage);
    page = numOfLinks ?
      Math.max(Math.min(lastVisiblePage, page), firstVisiblePage)
      : Math.max(Math.min(lastPage, page), firstPage)
      ;

    return (
      <div>

        {hideFirstLast ? '' :
          <FirstLastComponent
            // className={classes.fab}
            onClick={e => setPage(e, firstPage)}
            disabled={page === 1}
            aria-label="First Page"
            style={{ boxShadow: theme.shadows[firstLastShadow] }}
            color={firstLastColor}
            {...firstLastProps}
            {...firstProps}
          >
            {firstContent ? firstContent :
              theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </FirstLastComponent>
        }

        {
          hidePrevNext ? '' :
            <PrevNextComponent
              onClick={e => setPage(e, page - 1)}
              disabled={page === 1}
              aria-label="Previous Page"
              style={{ boxShadow: theme.shadows[prevNextShadow] }}
              color={prevNextColor}
              {...prevNextProps}
              {...prevProps}
            >
              {
                prevContent ? prevContent :
                  theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </PrevNextComponent>
        }

        {
          Array(lastVisiblePage - firstVisiblePage + 1)
            .fill()
            .map((v, i) =>
              <LinksComponent
                onClick={e => setPage(e, i + firstVisiblePage)}
                key={i}
                className={classes.fab}
                size="small"
                style={{ boxShadow: theme.shadows[linksShadow] }}
                color={page === i + firstVisiblePage ? activeLinkColor : linksColor}
                {...linksProps}
                {...(page === i + firstVisiblePage ? activeProps : {})}
              >
                {i + firstVisiblePage}
              </LinksComponent>
            )
        }
        {hidePrevNext ? ''
          : <PrevNextComponent
            onClick={e => setPage(e, page - 1)}
            disabled={page === lastPage}
            aria-label="Previous Page"
            onClick={e => setPage(e, page + 1)}
            style={{ boxShadow: theme.shadows[prevNextShadow] }}
            color={prevNextColor}
            {...prevNextProps}
            {...nextProps}
          >
            {nextContent ? nextContent :
              theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </PrevNextComponent>
        }

        {hideFirstLast ? '' :
          <FirstLastComponent
            selected={true}
            onClick={e => setPage(e, lastPage)}
            disabled={page === lastPage}
            aria-label="Last Page"
            className={classes.fab}
            title={lastPage}
            style={{ boxShadow: theme.shadows[firstLastShadow] }}
            {...firstLastProps}
            color={firstLastColor}
            {...lastProps}
          >
            {lastContent ? lastContent :
              theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </FirstLastComponent>
        }

      </div>
    )
  }
export default Pagination;