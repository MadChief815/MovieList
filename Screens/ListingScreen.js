import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    FlatList,
    TextInput,
    TouchableOpacity,
    Platform,
    ActivityIndicator
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Custom Components
import { Colors } from '../Components/Styles/Colors';
import { fetchMovies, searchMovies } from '../Services/api';
import MovieCard from '../Components/MovieCard/MovieCard';

// Status Bar Height
const statusbarHeight = Platform.select({
    android: StatusBar.currentHeight || hp(2),
    ios: hp(3), 
});

const MovieListScreen = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: fetchMovies
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState(null);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        setSearchLoading(true);
        setSearchError(null);
        try {
            const results = await searchMovies(searchQuery);
            setSearchResults(results);
        } catch (err) {
            setSearchError('Failed to search movies...');
        } finally {
            setSearchLoading(false);
        }
    };

    return (
        <SafeAreaView style={Styles.MainCont}>
            <StatusBar
                translucent={true}
                backgroundColor={Colors.AdditionalBlack}
                barStyle="light-content"
            />

            {/* Search Bar */}
            <View style={{ paddingVertical: hp(1) }}>
                <View style={Styles.searchContainer}>
                    <TextInput
                        style={Styles.searchInput}
                        placeholder="Search for movies..."
                        placeholderTextColor={Colors.Grayscale500}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity style={Styles.searchButton} onPress={handleSearch}>
                        <Text style={Styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Error Message */}
            {searchError && <Text style={Styles.errorText}>{searchError}</Text>}

            {/* Loading Indicator */}
            {searchLoading && <ActivityIndicator size="large" color={Colors.AdditionalWhite} />}

            {/* No Movies Found */}
            {searchQuery && searchResults.length === 0 && !searchLoading && (
                <View style={Styles.centeredView}>
                    <Text style={{ color: Colors.Grayscale500 }}>No movies found</Text>
                </View>
            )}

            {/* Movie List */}
            {isLoading ? (
                <View style={Styles.centeredView}>
                    <Text>Loading...</Text>
                </View>
            ) : error ? (
                <View style={Styles.centeredView}>
                    <Text>Error loading movies</Text>
                </View>
            ) : (
                <FlatList
                    data={searchQuery ? searchResults : data}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={Styles.listContainer}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => <MovieCard movie={item} />}
                />
            )}
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    MainCont: {
        flex: 1,
        backgroundColor: Colors.AdditionalBlack,
        paddingTop: statusbarHeight
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.Grayscale900,
        borderRadius: hp(1),
        paddingHorizontal: hp(1.5),
        margin: hp(1),
    },
    searchInput: {
        flex: 1,
        color: Colors.Grayscale100,
        fontSize: hp(2),
        paddingVertical: hp(1),
    },
    searchButton: {
        paddingVertical: hp(1.2),
        paddingHorizontal: hp(2.5),
        borderRadius: hp(1),
    },
    searchButtonText: {
        color: Colors.Grayscale50,
        fontSize: hp(2),
        fontWeight: '700',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginVertical: hp(1),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        paddingBottom: hp(2),
    },
});

export default MovieListScreen;
